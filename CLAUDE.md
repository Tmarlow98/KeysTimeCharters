# Keys Time Charters — Developer Notes

## Adding a New Fishing Report

Each report lives at `app/fishing-reports/<slug>/page.tsx`. Copy the existing report page as a starting point:
`app/fishing-reports/flamingo-snook-fishing-report-may-17-2026/page.tsx`

### Required changes per new report

1. **Update `REPORT_URL`** — match the new slug exactly
2. **Fill in `blogPostingSchema()`** — title, description, datePublished (ISO: `YYYY-MM-DD`), image path
3. **Fill in `breadcrumbSchema()`** — third item should be the report title and URL
4. **Update `metadata`** — title, description, canonical URL, OG fields, keywords
5. **Update `REPORT_FAQS`** — write 3–4 FAQs specific to the conditions/species on that trip
6. **Add the report to the index** — open `app/fishing-reports/page.tsx` and add an entry to the `REPORTS` array (used by `reportListSchema()` and the visible report list)

### Schema wiring (automatic)

The builders in `lib/seo.ts` handle cross-references automatically:
- `blogPostingSchema()` sets `author['@id']` to `https://keystimecharters.com/#captain-tyler-marlow`
- `blogPostingSchema()` sets `publisher` to the business entity
- No manual @id values needed per report

### Canonical @id values

| Entity | @id |
|---|---|
| Business | `https://keystimecharters.com/#business` |
| Captain | `https://keystimecharters.com/#captain-tyler-marlow` |
| Services | `https://keystimecharters.com/<service-slug>#service` |

Do not invent new top-level @id values. Service pages use `{page-url}#service` via `serviceSchema()`.

### Validation after adding a report

Paste the new report page's JSON-LD into [validator.schema.org](https://validator.schema.org) and confirm 0 errors.
To get the JSON-LD: open the page in the browser → `Ctrl+U` (View Source) → `Ctrl+F` → search `ld+json`.
