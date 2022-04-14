import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './productSlice'

function ReduxProductList() {

    const prodList = useSelector((state: any) => state.product.prodList);
    const dispatch = useDispatch();

    const defaultOptionList: any[] = [
        {name: "Op1", completed : true},
        {name: "Op2"},
        {name: "Op3"},
    ];

    const [optionList, setOptionList] = useState(defaultOptionList);

    function sendUserAction() {
        dispatch(addUser("user name"));
        console.log(optionList);
    }

    function onSelect(evt: any, selOption: any) {
        const updatedOptionList = optionList.map(option=> {
            if (option.name === selOption.name) {
                if (evt.target.checked) {
                    option.completed = true;
                } else {
                    option.completed = false;
                }
            }
            return option;
        });
        setOptionList(JSON.parse(JSON.stringify(updatedOptionList)));
    }

    return (
        <div>
            <ul>
                {
                   prodList && prodList.map((prodName: string)=>{
                       return <li>{prodName}</li>
                   }) 
                }
            </ul>
            <ul>
                {
                   optionList && optionList.map((option: any)=>{
                    //    return <li>{prodName}</li>
                        return <li><input type="checkbox" 
                            value={option.name} 
                            checked={option.completed}
                            onChange={(evt)=>onSelect(evt, option)} 
                        />{option.name}</li>
                   }) 
                }
            </ul>
            <button  onClick={sendUserAction}>Add user</button>
        </div>
    );
}

export default ReduxProductList;