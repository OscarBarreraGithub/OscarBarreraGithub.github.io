# Local Preview Notes

- Prefer the native Jekyll preview on this machine instead of Docker unless the user asks otherwise.
- The system Ruby at `/usr/bin/ruby` is too old for this repo's `Gemfile.lock`. Use `rbenv`.
- Verified working locally on 2026-03-13 with `ruby 3.4.4` and `Bundler 2.6.9`.

## Localhost Preview

Run from the repo root:

```bash
export PATH="$HOME/.rbenv/shims:$HOME/.rbenv/bin:$PATH"
ruby -v
bundle -v
bundle check || bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 4000 --livereload
```

- Open `http://127.0.0.1:4000`.
- If port `4000` is already in use, use:

```bash
bundle exec jekyll serve --host 127.0.0.1 --port 4001 --livereload_port 35730
```

- If you just need a quick verification and do not need live reload, `bundle exec jekyll serve --host 127.0.0.1 --port 4001` is enough.
- If browser launching from the sandbox fails, tell the user to open the localhost URL manually.
