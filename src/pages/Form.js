/*import React from 'react';
import { useLocation,  useParams } from 'react-router-dom';
import { useState } from 'react';
  
const Form = () => {
  const loc= useLocation();
  console.log(loc);
  let {id}=useParams();
  let {idx,unit,name}= useParams();
  let[cnt, setCountER]= useState(0);
  return (
    <div className="App">
    <header className="App-header">
      <h1>To for</h1>
      <p>Case ID: {id}</p>
      <p>Case URL: {loc.pathname}</p>
      <h2>TEST PARAMS</h2>
      <p>ID: {idx}</p>
      <p>KLAS: {unit}</p>
      <p>NAZWISKO: {name}</p>
      <button onClick={()=>setCountER(cnt+1)}>++</button>
      <p>{cnt}</p>

      </header>
    </div>
  );
};
  export default Form;*/


import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import Select from 'react-select';
import { useLocation,  useParams } from 'react-router-dom';
import { getElementError } from '@testing-library/react';

export default function FormValidation() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    const loc= useLocation();
    const path= loc.pathname;


  

    const options = [
      { value: '4pt5', label: '4pt5' },
      { value: '3pt', label: '3pt' },
      { value: '2pt', label: '2pt5' }
    ]

    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Field>
                <label>Imie</label>
                    <input
                        placeholder='Imie'
                        type="text"
                        {...register("imie")}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Nazwisko</label>
                    <input
                        placeholder='Nazwisko'
                        type="text"
                        {...register("nazwisko")}
                    />
                </Form.Field>
                <Form.Field>
                <Select options={options} />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input
                        placeholder='Password'
                        type="password"
                        {...register("password")}
                    />
                </Form.Field>
                    {(() => {
                         switch (path) {
                         case '/Form/pLegit':
                             return 
                          case '/Form/mLegit':
                             return  <Form.Field>
                             <label>Email</label>
                             <input
                                 placeholder='Email'
                                 type="email"
                                 {...register("email", 
                                 { 
                                     required: true,  
                                     pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
                                 })}
                             />
                         </Form.Field>
                        case '/Form/pwdRstMs':
                             return  <Form.Field>
                             <label>Email</label>
                             <input
                                 placeholder='Email'
                                 type="email"
                                 {...register("email", 
                                 { 
                                     required: true,  
                                     pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(?!zsegw.pl)((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
                                 })}
                             />
                         </Form.Field>
                        case '/Form/cert1':
                              return <><Form.Field><label>Temat zaświadczenia</label>
                              <input
                                  placeholder='Temat zaświadczenia'
                                  type="text"
                                  {...register("tematZas")}
                              />
                              </Form.Field>
                              <Form.Field>
                              <label>Terść</label>
                              <input type="textarea" 
                            {...register("tersc")}
                              />
                               </Form.Field>
                              </>
                        case '/Form/applic':
                              return <Form.Field><label>Średnia w nauce</label>
                              <input
                                  placeholder='0.00'
                                  type="text"
                                  {...register("serdniaN")}
                              />
                              </Form.Field>
                        case '/Form/other':
                            return <><Form.Field>
                            <label>Temat sprawy</label>
                            <input
                                placeholder='Temat Sprwy'
                                type="text"
                                {...register("tematSpr")}
                            />
                            </Form.Field>
                            <Form.Field>
                            <label>Opis</label>
                            <input type="textarea" 
                          {...register("opis")}
                            />
                             </Form.Field>
                            </>
                        default:
                         return null
        }
      })()}
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}