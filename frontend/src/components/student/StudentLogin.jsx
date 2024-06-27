/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Form, FormControl,  FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "@/components/ui/input"
import { axiosClient } from "../../api/axios";
 
const formSchema = z.object({
  email: z.string().email().min(2).max(30),
  password :z.string().min(8).max(30),
})

 async function onSubmit(values) {
 const csrf = await axiosClient.get( '/sanctum/csrf-cookie')

 const data = await axiosClient.post('Auth/login',values,{withXSRFToken:csrf})
 console.log(data)  
  }
function StudentLogin() {
    const form = useForm({
        resolver: zodResolver(formSchema),
      defaultValues:{
        email:'yahiagx1997@gmail.com',
        password:'199705yahia',
      }
      })

    return (
        <>
                <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
           
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>password</FormLabel>
              <FormControl>
                <Input type='password'
               
                placeholder="password" {...field} />
              </FormControl>
           
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>

        </>
    )
}

export default StudentLogin
