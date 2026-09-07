# Type Default Audit, public release

This directory contains the brief set and the summary tables behind the figures
in the write-up. It is enough to check every published number and to regenerate
the concentration curve, the breadth comparison and the model comparison.

## What is not here

Raw model responses are not included. Neither is the harness source. Nothing in
this directory contains model output beyond the aggregated counts in
`rank_frequency.csv`.

## Provenance

The catalog snapshot is the Google Fonts Web Fonts Developer API response of
**1 September 2026**, holding 1,955 families, of which 1,944 carry Latin and 118
carry Greek. The response is stored with a checksum outside this release.

The three models, as recorded per call at run time:

| Write-up name | Model identifier |
|---|---|
| Claude | `claude-opus-4-5-20251101` |
| ChatGPT | `gpt-5.5-2026-04-23` |
| Gemini | `gemini-3.1-pro-preview` |

Temperature was 1.0, sent explicitly to Claude and Gemini. It was omitted for
ChatGPT, whose models reject the parameter, so that model's effective sampling
behaviour is inferred rather than observed. The token ceiling was raised twice
during the run, from 4,096 to 8,192 to 16,384, because one provider was
truncating on the longest briefs.

All figures here cover the open condition, which is complete for all three
models. The restricted condition is complete for Claude and ChatGPT only, and
`restriction.csv` covers those two.

## Two counts, and why they differ

The design implies 210 briefs by 3 models by 3 repetitions by 5 recommendations,
which is **9,450 recommendation slots**. Every one of the 1,890 calls returned
exactly five parsed items, with no malformed or missing responses.

The analysis reports **9,558 named typeface mentions**. The difference of 108 is
not an error and not a duplicate. A model answering with a compound field such as
`Roboto + Roboto Mono` has named two families, and the normalizer emits a row for
each while preserving the source string on both. There are 108 such occurrences
in the open condition.

Shares in `concentration.csv` use 9,558 as the denominator, because the unit
being counted is a named typeface rather than a response slot.

## Files

| File | Contents |
|---|---|
| `briefs.json` | All 210 briefs with their five tags, word count and length band |
| `grid.json` | Seed, marginals, pairwise and three-way occupancy |
| `reweighting_weights.csv` | Weights for converting balanced-grid figures to representative ones |
| `rank_frequency.csv` | Every distinct typeface, times recommended, resolution class, usage rank |
| `concentration.csv` | Top-N shares, HHI and Gini for three populations |
| `breadth_by_slice.csv` | Distinct families and names per dimension value |
| `model_breakdown.csv` | Per-model distribution and repeatability figures |
| `restriction.csv` | Open against restricted, Latin-only briefs, two models |
| `usage_correlation.csv` | Four specifications of the usage correlation |
| `resolution_sensitivity.csv` | Headline metrics with judgment calls included and excluded |
| `null_overlap.json` | The overlap null model and its parameters |
| `figure_map.csv` | Every numerical claim in the write-up against the file supporting it |

## Things a reader should know before using these files

**Two of the three reweighting scenarios are placeholders.** Only `as_sampled` is
measured. The other two carry the status `PLACEHOLDER, UNVALIDATED ASSUMPTION`
and are not derived from any survey of practice.

**Occupancy is not balance.** All 347 pairwise cells in the grid are occupied,
but cell counts range from 2 to 14, and one of the ninety cells in the tone by
script by specificity crossing is empty.

**Specificity is word count.** The three bands are length bands and they overlap
at their boundaries, since vague reaches 25 words while moderate begins at 24,
and moderate reaches 44 while highly specific begins at 42.

**The repeatability column is mean pairwise Jaccard**, marked PRIMARY in
`model_breakdown.csv`. Two other set-overlap statistics are given beside it
because they answer the same question differently and give different values.

**Monte Carlo figures carry simulation error.** The matched-draw and
novel-family intervals in `restriction.csv` come from 2,000 draws with the RNG
seeded immediately before each loop, and their bounds move by about one family
under a different call order. The seed and the procedure are recorded in the
file.

**Eight claims in the write-up have no supporting file here**, and they are
listed as such in `figure_map.csv`. Two are figures from an external survey. One
is a harness-internal optimisation cost. The remaining five are catalog-share
figures sliced by script or tone that no requested file covers.
