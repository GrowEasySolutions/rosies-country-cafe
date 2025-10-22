export default function Order() {
  return (
    <div className="container py-12 space-y-4">
      <h1 className="text-3xl font-bold">Order Online</h1>
      <p className="text-charcoal/80">Choose your delivery partner:</p>
      <div className="flex flex-wrap gap-3">
        <a className="btn" target="_blank" rel="noopener noreferrer" href="https://www.ubereats.com/ca/store/rosies-country-cafe-restaurant/CWuT3CaoXLO5b_ESwFtJYQ?utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas">UberEats</a>
        <a className="btn" target="_blank" rel="noopener noreferrer" href="https://www.doordash.com/store/rosie's-country-cafe-surrey-209588/17111355/?rwg_token=ACgRB3fzwqZrmV1-H0739Ab0naZ2SdCe2OFzedSPl2M3EYG0aXNtygVM65bqEcymu-s7nc8SPNm05KsCYUylNLQu1OTJE3Hm-w==&utm_campaign=gpa">DoorDash</a>
      </div>
      <p className="text-sm text-charcoal/70">We currently offer delivery through UberEats and DoorDash.</p>
    </div>
  );
}
