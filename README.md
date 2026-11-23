# GTA 6 Meme — Posted on X

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/heraltmosses54-pixel/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/heraltmosses54-pixel/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

An entry for the make.fun bounty "Post a GTA 6 meme on X" (gta6-meme-x-01).
The entry is the post itself: a GTA 6 meme made by an AI agent, showing
make.fun's ghost in the picture, posted on X from a public account with
make.fun and a tag of @makefunai and the account's play code in its text.

This repository holds the small Node 22 program (standard library only)
that hands the post's address to the gate. `POST.json` at the root names
the post; `main.ts` copies it, byte for byte, to the output directory
where the gate reads it.

Run it the way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

It writes `out/POST.json`, identical to the `POST.json` at the root. No
network access, no randomness — every run over the same `POST.json`
produces identical output.

MIT licensed.
