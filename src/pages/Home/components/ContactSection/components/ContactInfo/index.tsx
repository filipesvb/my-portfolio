const ContactInfo = () => {
  return (
    <div className="border-2 rounded-lg p-4">
      <div className="w-full flex gap-2 bg-red-200">
        <h2 className="flex-2/5">img</h2>
        <a className="flex-3/5">fvb.boas@gmail.com</a>
      </div>
      <div className="w-full flex gap-2">
        <h2 className="flex-2/5">img</h2>
        <a className="flex-3/5">+55 (19) 99734-0189</a>
      </div>
    </div>
  )
}

export default ContactInfo;