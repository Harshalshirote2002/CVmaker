export default function Info({ currentState, onUpdate }) {
  return (
    <div className="input-details">
      <form action="#">
        <h3 className="input-details-title">Personal Details</h3>
        <div className="entry">
          <label htmlFor="input-name">Full name</label>
          <input
            value={currentState.name}
            onChange={(e) => {
              onUpdate({ ...currentState, name: e.target.value });
            }}
            className="input-name"
            id="input-name"
          />
        </div>

        <div className="entry">
          <label htmlFor="input-title">Job title</label>
          <input
            value={currentState.title}
            onChange={(e) => {
              onUpdate({ ...currentState, title: e.target.value });
            }}
            className="input-title"
            id="input-title"
          />
        </div>

        <div className="entry">
          <label htmlFor="input-mail">Email</label>
          <input
            value={currentState.mail}
            onChange={(e) => {
              onUpdate({ ...currentState, mail: e.target.value });
            }}
            className="input-mail"
            id="input-mail"
          />
        </div>

        <div className="entry">
          <label htmlFor="input-phone">Phone number</label>
          <input
            value={currentState.phone}
            onChange={(e) => {
              onUpdate({ ...currentState, phone: e.target.value });
            }}
            className="input-phone"
            id="input-phone"
          />
        </div>

        <div className="entry">
          <label htmlFor="input-address">Address</label>
          <input
            value={currentState.address}
            onChange={(e) => {
              onUpdate({ ...currentState, address: e.target.value });
            }}
            className="input-address"
            id="input-address"
          />
        </div>
      </form>
    </div>
  );
}
