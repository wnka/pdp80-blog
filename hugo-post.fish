#!/usr/bin/env fish

if test (count $argv) -ne 1; or test -z (string trim -- "$argv[1]")
    echo 'Usage: ./hugo-post.fish "Post Title"' >&2
    exit 2
end

set -l title (string trim -- "$argv[1]")

if string match -q --regex '[\r\n]' -- "$title"
    echo 'Error: the post title must be a single line.' >&2
    exit 2
end

set -l slug (string lower -- "$title" | string replace --all --regex '[^a-z0-9]+' '-' | string trim --chars '-')

if test -z "$slug"
    echo 'Error: the post title must contain at least one letter or number.' >&2
    exit 2
end

set -l post_path "content/posts/"(date +%F)"-$slug.md"

if test -e "$post_path"
    echo "Error: $post_path already exists." >&2
    exit 1
end

hugo new "$post_path"; or exit $status

set -l escaped_title (string replace --all "'" "''" -- "$title")
set -l temp_path (mktemp)

begin
    while read -l line
        if string match -q --regex '^title:' -- "$line"
            printf "title: '%s'\n" "$escaped_title"
        else
            printf '%s\n' "$line"
        end
    end < "$post_path"
end > "$temp_path"

mv "$temp_path" "$post_path"; or exit $status
echo "Created $post_path"
