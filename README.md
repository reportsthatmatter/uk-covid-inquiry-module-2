# UK Covid-19 Inquiry: Modules 2, 2A, 2B, 2C report

HC 1436, presented to Parliament on 20 November 2025 under section 26 of the Inquiries Act 2005 (published on the Inquiry's website the same day). The UK Covid-19 Inquiry's second report: core UK decision-making and political governance, drawing on Module 2 (UK), 2A (Scotland), 2B (Wales) and 2C (Northern Ireland), by the Chair, the Rt Hon the Baroness Hallett DBE. Two volumes (460 and 336 PDF pages).

## Scope

Volume I (HC 1436-I) only, so far, as the report id `uk-covid-inquiry-module-2`: the Chair's Introduction, Voices, the Executive summary (which summarises the whole report's findings and lists the recommendations in brief), and Chapters 1 to 8, the account of key events from January 2020 to May 2022. 460 PDF pages.

Volume I goes first because it carries the Introduction and the Executive summary, which is where the report's headline findings are stated, and the chronology the press quoted most. Volume II (HC 1436-II, Key themes, lessons and recommendations: Chapters 9 to 12 and the appendices, with the full list of recommendations in Appendix 3) is the next unit of this same id, to be added as a second volume in `ingest.ts`. The Inquiry's other module reports are separate reports with their own ids. The In Brief summary, the Easy Read edition and translations are separate publications and out of scope.

## Source

`archive/covid-inquiry-module-2-vol1-hc1436-i-amended-2026-02.pdf`: Volume I with post-publication amends (Version 1.1, February 2026), as linked from the Inquiry's report page (https://covid19.public-inquiry.uk/documents/module-2-full-report/). Crown copyright 2025, licensed under the Open Government Licence v3.0 (stated on the PDF's p.4, the imprint). See `datapackage.json`. The Inquiry's site refuses requests without a browser User-Agent.

## Materials

Checked 2026-10-24 (stage 1 of the preparation pipeline, reportsthatmatter-gqsy.14).

| Need | Source | Role |
| --- | --- | --- |
| Words | The amended PDF, SHA-256 `af1ca2d8…1bae` | canonical, citation target |
| Blocks and headings | The same PDF's layout (faces and sizes); it is also tagged (H1 1, H2 12, H3 69, H4 74, H5 18, Note 3,241) | the PDF pipeline reads the layout; the tag census is the answer key |
| Paragraph numbers | The PDF ("3.98."); the HTML edition has them too | PDF; HTML cross-check |
| Notes | The PDF's page-foot notes (3,241 tagged), numbered afresh in each chapter | PDF; the HTML edition's per-chapter reference lists are an answer key |
| Page anchors | The printed folios: roman on the front matter (Introduction at xiii), arabic in the body, printed page = PDF page − 20 (checked at PDF pp.35, 141, 367, 454) | PDF |
| Provenance | HC 1436-I, ISBN 978-1-5286-5449-4, E03296643 11/25 Version 1.1 | datapackage |
| Reference | The Inquiry's HTML edition of Volume I, `reference/raw/volume-1.html` (fetched 24 October 2026; https://covid19.public-inquiry.uk/documents/reports/modules-2-2a-2b-2c-core-decision-making-and-political-governance-volume-i) | words, numbered paragraphs, h2-h5 headings and linked notes; no page anchors |
| Rejected | The original November 2025 PDF (`…/2025/11/18102043/1435-HH-E03296643_UK-Covid-19-M2-•V1•-Inquiry_Volume-I_accessible.pdf`, 7,899,743 bytes, SHA-256 `2fbbcb40234e6d56cbd7bf705e477643d638288082fe983a97204ef669eee4b8`, 464 pages; still live, and in the Wayback Machine from 20 November 2025) | superseded by the two corrections below |

Sourcing checklist:

1. How the PDF was made: Adobe InDesign 21.1 (Macintosh), Adobe PDF Library 18.0, created 4 February 2026, modified 11 February 2026. Proxima Nova family throughout. Born-digital; A4, single column. Folios printed at the foot of each page. Tagged (census above; also P 5,921, LI 152, Figure 45, Table 5).
2. Other renditions: the November 2025 original (rejected above). GOV.UK's page for the report (`/government/publications/uk-covid-19-inquiry-core-decision-making-and-political-governance-modules-2-2a-2b-2c-report`) links to the Inquiry's page and holds no copy of its own.
3. Official HTML: yes, the Inquiry's, one page per volume, carrying the amended text (reference above).
4. EPUB: none.
5. Wikisource: not checked (an official HTML edition and a tagged PDF already cover every need).
6. Court documents: not applicable.
7. US congressional: not applicable.
8. Originals: the Inquiry (contact@covid19.public-inquiry.uk, printed on p.4).

Versions: Volume I was re-issued in February 2026 "with post-publication amends". A word 6-gram comparison of the two PDFs (205,864 and 208,283 words) finds two changes to the report's words, both listed on the Correction Slip the amended PDF adds as its p.5 (dated 16 January 2026): Chapter 2, paragraph 41 (Ms Sturgeon's briefing of 24 January 2020 came from "the Scottish Government's Health Protection Policy Team", not Health Protection Scotland, and "further advice" becomes "advice") and Chapter 3, paragraph 16 (Mr Pengelly's letter to the trusts is dated 26 March 2020, not 1 March). Every other difference is figure text: the amended PDF adds an OCR text layer over about 30 figure images (message screenshots, a whiteboard, news graphics), all in one face (GdPictureBackupFont), much of it unreadable ("oor ae nhs helen wey", PDF p.177). The ingest drops that layer by its face. The amended PDF is four pages shorter.

Layout notes: running heads at the top of each page ("Chapter 3: The first 12 days of March 2020" on rectos, the volume title on versos); numbered paragraphs ("3.98.") with the number at the margin and the text hanging; indented quotations; figures with a caption ("Figure 4: …") and a "Source: …" line; notes at the foot, number and text on one line ("196 INQ000398439_0001 para 4", PDF p.141), numbered afresh in each chapter.

## Licence

Text of the report: Crown copyright 2025, Open Government Licence v3.0. Our markup, processing and editorial additions: CC BY 4.0. Code: MIT. Evidence, caveats and the full statement are in [LICENSE](LICENSE); the MIT text is in [LICENSE-MIT](LICENSE-MIT).

## Build

`ingest.ts` declares how the report is turned into Markdown. Rebuild from the site repo with `pnpm ingest run uk-covid-inquiry-module-2`. `fidelity.md` lists the words the pipeline flagged for review.
