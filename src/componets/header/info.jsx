
const Info = () => {
    const info = 
        {
            phone: '+01 256 25 235',
            email: 'infoo@gmail.com',
            giftCard: 'GIFT CARD',
            trackOrder: 'TRACK ORDER',
            language: 'LANGUAGE'
        }
    
  return (
    <div className="top-header">
    <div className="container">
        <div className="top-header__content">

            <div>
                <span className="top-header__text">PHONE: {info.phone}</span>
                <span className="top-header__text">EMAIL: {info.email}</span>
            </div>

            <div>
                <a href="#" className="top-header__text">{info.giftCard}</a>
                <a href="#" className="top-header__text">{info.trackOrder}</a>
                <a href="#" className="top-header__text">{info.language}</a>
            </div>

        </div>
    </div>
</div>
  )
}

export default Info