# Placebo control result

Preregistered in `preregistration.md` before the run. The decision rule below was
fixed in advance and is not restated here in altered form.

## Which branch the result falls into

**The first branch. The placebo CI overlaps 73 and does not widen.** Arbitrary
constraints do not widen the recommendation set. The catalog result is not
explained by constraint satisfaction, and the published finding stands, subject
to the two limitations preregistered and repeated at the end.

The placebo produced a matched-draw mean of **72.7 distinct catalog families,
95 percent CI [70, 75]**, against the open condition's 73. That is a change of
**minus 0.4 percent**. The catalog constraint on the same briefs, the same
models and the same procedure produced 94.2, CI [88, 101], an increase of 29.1
percent. The two intervals do not come close to touching.

## Manipulation checks

| Check | Result | Verdict |
|---|---|---|
| 1. Did the model register the constraint? | 49.9 percent of placebo reasons mention bold or weight, against 25.4 percent in the open condition on the same briefs | PASS |
| 2. Did it eliminate anything it should not have? | confirmed non-catalog share 44.9 percent, against 49.3 percent open and 0.1 percent catalog-restricted | PASS, with a caveat below |
| 3. Did the constraint hold? | 7 of 75 recommended catalog families have no bold weight in the catalog record | reported, does not invalidate |

**Check 1 passed and also showed that mention rate understates registration.**
The reference arm mentions Google Fonts in only 2.6 percent of its reasons while
having driven the non-catalog share from 49.3 percent to 0.1 percent. A model can
obey a constraint completely without talking about it. The placebo's doubling of
weight mentions over baseline is therefore good evidence that the sentence was
read, but a low rate would not have been good evidence that it was ignored, and
the check is weaker in one direction than the preregistration assumed.

**Check 2 passed, and the caveat is real.** The placebo's non-catalog share fell
by 4.4 points rather than staying flat. That is not the sharp drop the
preregistration defined as contamination, since the catalog constraint moved the
same quantity by 49.2 points, so the placebo removed about nine percent as much
licensed type as the real constraint did. It is not nothing. Some licensed faces
were dropped, plausibly because the model could not vouch for a bold weight in
them. The direction is toward the catalog, which would bias the placebo toward
widening, and it did not widen.

**Check 3 is a compliance failure worth recording.** Seven families the model
recommended under a bold-weight constraint carry no bold in their catalog record:
Anton, Archivo Black, Bebas Neue, Linden Hill, Roboto Flex, Sorts Mill Goudy and
Varela Round. Several are single-weight display faces that are visually heavy, so
the model may be reasoning about appearance rather than about a weight axis. The
rate is 9.3 percent. It does not affect the breadth measurement, which counts
families rather than compliance.

## The table

Latin-only briefs, Claude and ChatGPT, catalog faces only. Monte Carlo figures
use 2,000 draws with the RNG seeded to 20260831 immediately before each loop.

| Metric | Open | Catalog-restricted | Placebo |
|---|---|---|---|
| Recommendation slots | 1,260 | 1,260 | 1,260 |
| Named rows after compound splitting | 1,278 | 1,260 | 1,278 |
| Catalog recommendations | 564 | 1,255 | 636 |
| Distinct catalog families, raw | 73 | 117 | 75 |
| Matched-draw mean distinct families | reference | 94.2 | 72.7 |
| 95 percent CI | reference | [88, 101] | [70, 75] |
| Percent change against 73 | reference | +29.1% | −0.4% |
| Top-five share | 37.4% | 24.7% | 36.9% |
| Novel families against open, mean | reference | 34.5 | 11.8 |
| Novel families 95 percent CI | reference | [29, 41] | [10, 13] |
| Novel families, full sets | reference | 52 | 13 |
| Open families absent | reference | 8 | 11 |

The placebo had 636 catalog recommendations, above the 564 threshold, so it took
the rarefaction path rather than the bootstrap fallback. Its interval is narrower
than the reference interval because it was drawn down from 636 rather than from
1,255, which is a property of the draw and not evidence of greater precision.

Top-five share barely moved, 37.4 to 36.9 percent, against the catalog
constraint's 37.4 to 24.7. The placebo did not flatten the distribution either.

## Family-set overlap

The placebo's 75 families include 62 of the open condition's 73, and its 13 novel
families are ordinary substitutions rather than a reach into new territory:
Alegreya Sans, Atkinson Hyperlegible Mono, Cardo, Figtree, Geist, Geist Mono,
Gentium Plus, Intel One Mono, Linden Hill, PT Sans, Quattrocento Sans, Sorts Mill
Goudy and Varela Round. Eleven open families dropped out, so the placebo churned
its set slightly without enlarging it.

All 62 of the placebo's shared families also appear in the catalog-restricted
arm's 117. The placebo found nothing the catalog constraint did not, which is
what a placebo that changes nothing should look like.

## What this does and does not license

It rules out constraint satisfaction as an explanation. Giving these models a
genuine, registered, grammatically matched rule to satisfy did not widen the
recommendation set, did not flatten the top-five share, and did not surface
families the open condition withheld. The 29.1 percent increase is a response to
the content of the catalog constraint, not to the presence of a constraint.

Two limitations were preregistered and both stand.

**A null placebo does not isolate the catalog.** The catalog constraint names an
enumerable list while the placebo names a property, and a model may respond
differently to a list than to a predicate. This result supports
catalog-specific or named-list-specific, not catalog-specific alone. Separating
those needs an arm naming a different finite catalog.

**Licensing removal remains untested.** The catalog constraint deletes Minion,
Sabon and Graphik from the answer space and the model must substitute. This
experiment does not address that, and it is the live alternative. It would refine
the published mechanism rather than falsify the finding, since the claim that the
models held those families and did not offer them survives either way. The
planned next control is `Recommend only typefaces that are free for commercial
use.`, which constrains on licensing without naming a catalog.

One thing this run adds to that argument. The placebo removed 4.4 points of
licensed type as a side effect and produced no widening at all. That is weak
evidence that small amounts of licensing removal do not drive the effect, but it
is a fifth of the way to the real constraint's 49.2 points and cannot be
extrapolated. The licensing arm is still needed.
