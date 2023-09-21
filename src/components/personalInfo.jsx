export default function Info() {
  return (
    <div className="input-details">
      <form action="#">
        <h3 className="input-details-title">Personal Details</h3>
        <div className="entry">
          <label htmlFor="input-name">Full name</label>
          <input className="input-name" id="input-name" />
        </div>

        <div className="entry">
          <label htmlFor="input-mail">Email</label>
          <input className="input-mail" id="input-mail" />
        </div>

        <div className="entry">
          <label htmlFor="input-phone">Phone number</label>
          <input className="input-phone" id="input-phone" />
        </div>

        <div className="entry">
          <label htmlFor="input-address">Address</label>
          <input className="input-address" id="input-address" />
        </div>
      </form>
    </div>
  );
}
