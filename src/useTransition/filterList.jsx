import { useTransition } from "react";
import { useState } from "react";
import  {fakeNames}  from "./fakerNames";

const FilterList = () => {
    const [query, setQuery] = useState("");
    const [highlight,setHighlight]=useState("")
const [isPending,startTransition]=useTransition()

const changeHandler=(e) => {
    setQuery(e.target.value)
    startTransition(()=>{
        setHighlight(e.target.value)
     })

}
 
    return (
        <>
            <input type="text" onChange={changeHandler} value={query} />
            {fakeNames.map((item) => {
            return   <ListItem name={item} highlight={highlight}/>;
            })}
        </>
    );
};

export default FilterList;

const ListItem = ({ name, highlight }) => {
    const index = name.toLowerCase().indexOf(highlight.toLowerCase());
 
    if (index === -1) {
        return <div>{name}</div>;
    }
    return (
        <div>
            {name.slice(0, index)}
            <span className="highlight">{name.slice(index, index + highlight.length)}</span>
            {name.slice(index + highlight.length)}
        </div>
    );
};
