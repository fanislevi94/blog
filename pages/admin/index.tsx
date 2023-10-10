//import $ from "jquery"
import api from "../components/services/api"
import { useState, useEffect } from 'react'
export default function Admin() {
    const [data, setData] = useState<null | any>();
    useEffect(() => {
        api.get("api/admin?value="+ sessionStorage.getItem("email"))
        .then((data) => {
            setData(data) 
        })
    }, [])
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("fani data are "+data.users.id)
    /*alert("select"+e.target.optionsall.value)
    alert("title"+e.target.title.value)
    alert("description"+e.target.description.value)*/
    api.post(
        { id:data.users.id,
          imageUrl: "/listpapaki.jpg",
          title: e.target.title.value,
          description: e.target.description.value,
          category: e.target.optionsall.value
        },
        "api/admin"
      );


  };

  return (
    <div className="text-center">
      <style jsx>{`
        .select-option {
          margin-top: 10%;
        }
      `}</style>

      <form onSubmit={handleSubmit}>
        <div>
        <select id="optionsall" className="select-option shadow-md bg-slate-100">
          <option value="ournews">Our News:</option>
          <option value="domains">Domains</option>
          <option value="wordpress">Wordpress</option>
          <option value="ecommerce">eCommerce</option>
          <option value="security">Security</option>
          <option value="marketing">Marketing</option>
          <option value="howto">How to </option>
          
        </select>
        </div>
        <div>Τίτλος
        <textarea  className="shadow-md bg-slate-100" id="title" name="postContent" />
        </div>
        <div>Περιγραφή
        <textarea  className="shadow-md bg-slate-100" id="description" name="postContent" />
        </div>
<div> <button type="submit" id="submitForm" className="mt-6 bg-slate-100">
         Υποβολή
        </button></div>
       
      </form>
    </div>
  );
}
