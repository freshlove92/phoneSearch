import React, { useEffect, useState } from 'react';
import SearchBox from './SearchBox';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';

const ContactList = () => {

    const contactList= useSelector(state=> state.contactList)
	const searchtext = useSelector(state => state.searchtext)

    let [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        if (searchtext !== "") {
        let list = contactList.filter((item) => item.name.includes(searchtext));

        setFilteredList(list);
        } else {
        setFilteredList(contactList);
        }
    }, [searchtext, contactList]);

    return (
        <div>
            <SearchBox />
            <div>
                {filteredList.map((item, index) => (
                <ContactItem item={item} key={index} />
                ))}
            </div>  
        </div>

    );
};

export default ContactList;