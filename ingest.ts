import {
  pipeline,
  layoutPageJoins,
  quoteListRunOns,
  furnitureFaces,
  figureFaces,
  romanFolios,
  geometry,
  sequencedNoteOpenings,
  footnoteRestarts,
  layoutMarkers,
  numberedParagraphs,
  hangingIndents,
  typographicHeadings,
} from "@rtm/ingest";

/**
 * How this report is built. Owned by the report: every decision that shaped
 * its text is named here, and the passes it composes are library code, so a
 * fix to a shared pass reaches every report that calls it.
 *
 * The source is the Inquiry's born-digital, tagged InDesign PDF of Volume I
 * (460 A4 pages, single column), the February 2026 issue with post-publication
 * amends. Its structure tree is not read: the PDF pipeline below reads the layout, and the tags
 * (reference/blocks.jsonl) are the answer key. Page citations below are PDF pages (printed body page =
 * PDF page - 20).
 *
 * Needs @rtm/ingest with typographicHeadings({ labelWraps }) and the sequencedNoteOpenings +
 * footnoteRestarts restart scan (ingest branch covidm2-passes-1024; not yet released when this was written).
 */
export default pipeline({
  id: "uk-covid-inquiry-module-2",
  title: "UK Covid-19 Inquiry, Modules 2, 2A, 2B, 2C: Core decision-making and political governance, Volume I",
  authors: "The Rt Hon the Baroness Hallett DBE (Chair)",
  published_at: "20 November 2025",
  source_url: "https://covid19.public-inquiry.uk/wp-content/uploads/2026/02/12093057/M2-Volume-1-with-post-publication-amends-Feb-2026.pdf",
  repo: ".",
  volumes: [
    // HC 1436-I, Volume I of 2: Introduction, Voices, Executive summary, Chapters 1-8. Version 1.1 (Feb 2026).
    { path: "archive/covid-inquiry-module-2-vol1-hc1436-i-amended-2026-02.pdf", sha256: "af1ca2d83c5058b47c4ce7e81673b11f87064a5d0c27a85256c7618e65541bae" },
  ],
  passes: [
    // A paragraph run over a page break joins when the layout says it runs on: 3.97 runs from PDF p.140
    // to p.141 ("…from June 2017 to" / "August 2020, that, at that time…").
    layoutPageJoins(),
    // A quotation running over a page arrives as two.
    quoteListRunOns(),
    // The running heads are set in white Proxima Nova 12pt on a banner: the volume title on versos
    // ("Modules 2, 2A, 2B, 2C: Core decision-making and political governance – Volume I", p.42), the
    // chapter on rectos ("Chapter 3: The first 12 days of March 2020", p.141). Read as headings, each
    // page's head became a section of its own. Dropped by face, and nothing else.
    furnitureFaces(["ProximaNova|18|#ffffff"]),
    // The February 2026 issue lays an OCR text layer over about 30 figure images (message screenshots,
    // a whiteboard, news graphics), all in GdPictureBackupFont: the whiteboard of Figure 7 (p.177) came
    // out as "oor ae nhs helen wey". The charts draw their labels in Proxima Nova Light ("England",
    // p.113), which the text never uses. Captions ("Figure 4: …", Proxima Nova Semibold) stay.
    figureFaces(["GdPictureBackupFont", "ProximaNova-Light"]),
    // The body's left edge is read per page. The volume-wide margin is the column the paragraph numbers
    // sit in, so a page that opens mid-paragraph, with no number on it, read its hanging text as a
    // quotation: "little but accepted the expert advice”.72 Both Public Health England…" (PDF p.62,
    // the end of 2.31) stood as a quotation of its own, cut from its paragraph on p.61.
    geometry("per-page"),
    // The front matter is folioed in roman numerals (the Introduction opens at xiii, p.15).
    romanFolios(),
    // 3,241 notes at the page feet (the tag census), numbered afresh in each chapter, number and text on
    // one line ("196 INQ000398439_0001 para 4", p.141). Markers are raised digits after a word or a
    // closing quotation mark ("premature”.196", p.141).
    sequencedNoteOpenings(),
    // Each chapter's notes start again at 1 (Chapter 3's at PDF p.113: "1" / tab / "INQ000223394_0001").
    // With sequencedNoteOpenings, a page whose expected note is missing is read for a run from 1 low down.
    footnoteRestarts(),
    layoutMarkers(),
    // "3.98." paragraphs, the number at the margin and the text hanging one tab in (p.141).
    numberedParagraphs(),
    hangingIndents(),
    // Headings are set only by face. Levels: the chapter title pages (Proxima Nova 36pt bold white,
    // "Chapter 1: / The context for pandemic decision-making …", p.36; also "Introduction by The Rt Hon
    // the Baroness Hallett DBE" p.15, "Voices" p.19, "Executive summary" p.21); then three blue
    // (#15365a) Semibold sub-heading sizes: 20pt ("Introduction", "Key structures", p.37), 16pt
    // ("Devolution in the UK", p.37; in Semibold italic where it names a publication, "Coronavirus:
    // Action Plan", p.136) and 14pt ("The speed of transmission", p.42). (Layout keys read 1.5 times the
    // point size.) The tag census agrees: 12 H1, 66 H2, 78 H3, 18 H4 in the reference.
    typographicHeadings({
      firstLevel: 2,
      relevel: true,
      // The chapter titles open "Chapter 1:" on a line of their own (p.36): without this the colon read as
      // a stop, the chapters stayed at level 3 (from the contents), siblings of their own "Introduction".
      labelWraps: true,
      faces: [
        ["ProximaNova|54|#ffffff|b"],
        ["ProximaNova-Semibold|30|#15365a|b"],
        ["ProximaNova-Semibold|24|#15365a|b", "ProximaNova-SemiboldIt|24|#15365a|b|i"],
        ["ProximaNova-Semibold|21|#15365a|b"],
      ],
    }),
  ],
});
