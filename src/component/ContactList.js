import React from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contactList = useSelector((state) => state.contactList);
  const keyword = useSelector((state) => state.keyword);

  const filteredList = keyword
    ? contactList.filter((item) =>
        item.name.toLowerCase().includes(keyword.toLowerCase())
      )
    : contactList;

  return (
    <div>
      <SearchBox />
      {filteredList.map((item, index) => (
        <ContactItem item={item} key={index} />
      ))}
    </div>
  );
};

export default ContactList;
