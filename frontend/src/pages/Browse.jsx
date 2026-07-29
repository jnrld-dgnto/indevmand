import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { api } from "../api";
import FilterBar from "../components/FilterBar";
import FreelancerCard from "../components/FreelancerCard";

export default function Browse() {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    q: "",
    type: searchParams.get("type") || "",
    city: "",
    sort: "newest",
  });
  const [meta, setMeta] = useState({ cities: [], types: [] });
  const [freelancers, setFreelancers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    api.getMeta().then(setMeta).catch(() => {});
  }, []);

  useEffect(() => {
    setLoading(true);
    setError("");
    api
      .listFreelancers(filters)
      .then((data) => setFreelancers(data.freelancers))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [filters]);

  return (
    <div className="container section page-content">
      <div className="section-heading">
        <div className="eyebrow">browse</div>
        <h2>Find your developer</h2>
        <p>{freelancers.length} developers currently listed across the Philippines.</p>
      </div>

      <FilterBar filters={filters} onChange={setFilters} meta={meta} />

      {loading && <div className="filter-count">Loading developers…</div>}
      {error && <div className="form-error">{error}</div>}

      {!loading && !error && freelancers.length === 0 && (
        <div className="empty-state">
          <div className="eyebrow">no results</div>
          <h3 style={{ marginBottom: 8 }}>No developers match those filters</h3>
          <p>Try clearing a filter or searching a broader skill.</p>
        </div>
      )}

      {!loading && freelancers.length > 0 && (
        <div className="freelancer-grid">
          {freelancers.map((f) => (
            <FreelancerCard key={f.id} freelancer={f} />
          ))}
        </div>
      )}
    </div>
  );
}
