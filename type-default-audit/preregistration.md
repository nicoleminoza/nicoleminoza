# Preregistration: placebo control for the restriction experiment

Written before any placebo call is made. The purpose of writing it first is that
the decision rule cannot be reinterpreted after the numbers are seen.

This is a single-arm study. Two earlier drafts are superseded: one used two
transparently inert placebos, which a model can recognise as vacuous and
therefore ignore, and one paired a placebo with an active licensing control. The
licensing control is deferred rather than dropped, for reasons given at the end.

## Question

The catalog restriction raised distinct catalog families from 73 to a
matched-draw mean of 94.2, an increase of 29.1 percent. The published write-up
already names the control this experiment runs:

> The control is one more run: append a constraint of similar length and
> grammatical form that does not narrow the eligible set, and see whether breadth
> widens anyway.

The question is whether the widening is a response to the catalog constraint
specifically, or a general effect of giving the model any rule to satisfy.

## The arm

One sentence, occupying the identical `{condition}` slot in the identical prompt
wrapper. Nothing else changes.

    Recommend only typefaces that include a bold weight.

Chosen because it eliminates essentially nothing, since almost every family a
model would name has a bold weight, while not being transparently vacuous. A
placebo has to be inert in effect but not obviously inert to the model, or the
model will dismiss it and the resulting null will describe only that dismissal.
It is a genuine, checkable set-constraint of the same grammatical form as the
catalog constraint, and it constrains on a property unrelated to licensing or to
catalog membership.

Reference sentence, already run: `Recommend only typefaces available in Google
Fonts.`

## Run parameters

| Parameter | Value |
|---|---|
| Briefs | the same 42 Latin-only briefs, unmodified |
| Models | `claude-opus-4-5-20251101`, `gpt-5.5-2026-04-23` |
| Repetitions | 3 per brief per model |
| Calls | 252 |
| Recommendation slots | 1,260 |
| Temperature | 1.0 explicit to Claude, omitted for ChatGPT |
| max_tokens | fixed at 16384, matching all 252 calls of the reference arm |
| top-p, seed | not sent |
| Normalizer | unchanged, same name-resolution rules |

## Manipulation checks, run before any breadth analysis

1. **Did the model register the constraint?** Fraction of `reason` fields
   referring to weight, bold or family range, reported beside the fraction of the
   reference arm's reasons mentioning Google Fonts. A near-zero rate means the
   sentence was ignored, and a null result then tells us nothing about
   constraints in general. The experiment would be reported as uninformative
   rather than as a null.

2. **Did the constraint eliminate anything it should not have?** Confirmed
   non-catalog share, against the open condition's 49.3 percent for these two
   models. A placebo should leave that share roughly unchanged. A sharp drop
   means the sentence removed licensed options and the arm is contaminated.

3. **Did the constraint hold?** Count of recommended catalog families whose
   catalog record contains no bold weight. Expected near zero. A high count means
   the model asserted compliance it did not deliver, which does not invalidate
   the breadth result but must be reported.

An arm failing check 1 or check 2 is reported as failed rather than
reinterpreted.

## Decision rule

Reference points: open condition 73 distinct catalog families; catalog-restricted
matched-draw mean 94.2, 95 percent CI [88, 101]. Comparison is CI overlap.

| Placebo result | Conclusion |
|---|---|
| CI overlaps 73 and does not widen | Arbitrary constraints do not widen the recommendation set. The catalog result is not explained by constraint satisfaction. The published finding stands, with this control reported, subject to the two limitations below. |
| CI overlaps [88, 101] | **Constraint satisfaction alone reproduces the effect. The published finding must be restated as an effect of constrained prompting, not an effect about typographic recall or about the catalog.** The restriction section is rewritten, not annotated. |
| CI clearly above 73 and clearly below [88, 101] | The effect is partly generic. Report the generic component as the placebo mean minus 73, and attribute only the residual to the catalog constraint. |

No multiple-comparison correction is applied, because the rule is CI overlap
rather than significance testing and there is one arm.

## Analysis

The same statistics as the original restriction analysis, on the same code path.
No new analysis is written. Reported: recommendation slots, named rows after
compound splitting, catalog recommendations, raw distinct catalog families,
matched-draw mean distinct families with 95 percent CI, percent increase over 73,
top-five share, top-five share after rarefaction, novel families relative to open
as a matched-draw mean with CI, full set difference, and count of open families
absent.

Output is one table with three columns: open, catalog-restricted, placebo. The
overlap between the placebo's family set and the catalog-restricted arm's is also
reported, because if the placebo widens it matters whether it widens toward the
same families.

All Monte Carlo figures use 2,000 draws with the RNG seeded to 20260831
immediately before each loop, recorded per loop, because interval bounds move by
about one family under a different call order.

### Matched-draw handling, pre-specified

The original analysis drew the catalog-restricted arm, which had 1,255 catalog
recommendations, down to the open condition's 564. A placebo that behaves as a
placebo should produce roughly 564 of its own, so drawing 564 from about 564 is
not a rarefaction and returns a nearly degenerate interval. An arm producing
fewer than 564 cannot run the procedure at all.

When the arm has at least 564 catalog recommendations it is rarefied to 564
exactly as the original was. When it has fewer, the matched-draw statistic is
reported as undefined and the raw distinct-family count is reported instead, with
a 95 percent interval from a 2,000-iteration bootstrap resampling briefs rather
than recommendations. The interval is labelled with which procedure produced it.

The placebo is expected to take the second path, so its interval will be visibly
narrower than the reference interval. That narrowness is an artifact of not
needing rarefaction rather than evidence of greater precision, and the decision
rule is unaffected, since it asks only whether an interval overlaps a point or an
interval.

## Corrections to the specification as given

**The call count was five times too high.** The specification gave 1,260 calls
per arm. That is the recommendation-slot count. Calls are 42 briefs by 3
repetitions by 2 models, which is 252.

**One asymmetry does not exist.** max_tokens varied across the original run as a
whole, but all 252 calls of the catalog-restricted Latin-only subset were made at
16384, so fixing the placebo there makes it identical to the reference arm rather
than merely comparable.

## Two limitations, stated before running

**A null result does not isolate the catalog.** The catalog constraint names an
enumerable list. The placebo names a property. A model may behave differently
when pointed at a list than when handed a predicate, and that difference is
specificity of reference rather than constraint satisfaction. A flat placebo
therefore supports "catalog-specific or named-list-specific" and not
"catalog-specific" alone. Separating those requires a further arm naming a
different finite catalog, which is not part of this experiment, and the write-up
must carry the wider phrasing.

**Licensing removal remains untested.** The catalog constraint deletes Minion,
Sabon and Graphik from the answer space, and the model must substitute. That is a
live alternative explanation and this experiment does not address it. It would
refine the published finding rather than falsify it, since the claim that the
models held those families and did not offer them survives either way, but the
reason for the withholding would change. The planned next control is the sentence
`Recommend only typefaces that are free for commercial use.`, which constrains on
licensing without naming a catalog. It is deferred because a flat placebo makes
that experiment cleaner to read, and because it cannot overturn the finding
whereas this one can.
