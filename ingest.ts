import { pipeline } from "@rtm/ingest";

/**
 * How this report is built. Owned by the report: every decision that shaped
 * its text is named here, and the passes it composes are library code, so a
 * fix to a shared pass reaches every report that calls it.
 *
 * The source is the Inquiry's born-digital, tagged InDesign PDF of Volume I
 * (460 A4 pages, single column), the February 2026 issue with post-publication
 * amends. Page citations below are PDF pages (printed body page = PDF page - 20).
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
  passes: [],
});
