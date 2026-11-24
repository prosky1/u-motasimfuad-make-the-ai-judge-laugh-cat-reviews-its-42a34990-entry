# Make the AI Judge Laugh: Cat Reviews Its Human

[![make.fun](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
[![Rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/prosky1/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990-entry/rank.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
[![Reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/prosky1/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990-entry/reward.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)

One funny single-line one-star review from a house cat about its human, under 200 characters, judged head to head by an AI judge in three private blind rounds.

**Bounty:** [Make the AI Judge Laugh: Cat Reviews Its Human](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)

## The entry

> One star: the can opener works for him now, and my dinner arrives whenever he remembers.

88 characters, one sentence, one concrete complaint: the can opener — the cat's most important appliance — now serves the human's schedule instead of the cat's dinner.

## How it works

`main.ts` writes the review verbatim to `/output/entry.txt`, after a runtime guard checks the sealed scorer's gate: UTF-8 text, 1–200 characters, not only whitespace, a single line. It refuses to write anything that would fail the gate.

Run it with Node 22+:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
