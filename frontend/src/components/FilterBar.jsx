export default function FilterBar({ filters, onChange, meta }) {
  function update(field, value) {
    onChange({ ...filters, [field]: value });
  }

  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search by name, skill, e.g. 'flutter'"
        value={filters.q}
        onChange={(e) => update("q", e.target.value)}
      />

      <select value={filters.type} onChange={(e) => update("type", e.target.value)}>
        <option value="">All developer types</option>
        {(meta.types || []).map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      <select value={filters.city} onChange={(e) => update("city", e.target.value)}>
        <option value="">All cities</option>
        {(meta.cities || []).map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <select value={filters.sort} onChange={(e) => update("sort", e.target.value)}>
        <option value="newest">Newest</option>
        <option value="rate_asc">Rate: low to high</option>
        <option value="rate_desc">Rate: high to low</option>
      </select>
    </div>
  );
}
