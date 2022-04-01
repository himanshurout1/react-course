import React, { useEffect, useState } from 'react';

function ListSearch(InputComp: any) {
    function WithSearch(props: any) {
        const [filterText, setFilterText] = useState("");
        const [filteredList, setFilteredList] = useState([]);
        const emps = props.list;

        useEffect(() => {
            const newList = emps.filter((emp: any) => {
                return emp.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
            });
            setFilteredList(newList);
        }, [filterText]);

        function onFilterChange(event: any) {
            setFilterText(event.target.value);
        }
        return (
            <div>
                <div>
                    <input type="text" value={filterText} onChange={onFilterChange} />
                </div>
                <InputComp list={filteredList} />
            </div>
        )
    }

    return WithSearch;
}

export default ListSearch;


