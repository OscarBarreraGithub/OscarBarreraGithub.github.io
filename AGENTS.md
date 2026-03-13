# Local Preview Notes

- Prefer the native Jekyll preview on this machine instead of Docker unless the user asks otherwise.
- The system Ruby at `/usr/bin/ruby` is too old for this repo's `Gemfile.lock`. Use `rbenv`.

## Localhost Preview

Run from the repo root:

```bash
export PATH="$HOME/.rbenv/bin:$PATH"
eval "$(rbenv init - zsh)"
bundle check || bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 4000 --livereload
```

- Open `http://127.0.0.1:4000`.
- If port `4000` is already in use, use:

```bash
bundle exec jekyll serve --host 127.0.0.1 --port 4001 --livereload_port 35730
```

- If browser launching from the sandbox fails, tell the user to open the localhost URL manually.
