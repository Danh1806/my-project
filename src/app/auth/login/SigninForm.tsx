"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

// Schema validate
const formSchema = z.object({
  username: z.string()
    .min(2, { message: "Username phải có ít nhất 2 ký tự" })
    .max(50, { message: "Username tối đa 50 ký tự" }),

  email: z.string()
    .email({ message: "Email không hợp lệ" })
    .min(5, { message: "Email phải có ít nhất 5 ký tự" })
    .max(100, { message: "Email tối đa 100 ký tự" }),

  password: z.string()
    .min(6, { message: "Mật khẩu phải có ít nhất 6 ký tự" })
    .max(50, { message: "Mật khẩu tối đa 50 ký tự" }),

  confirmPassword: z.string()
    .min(6, { message: "Xác nhận mật khẩu phải có ít nhất 6 ký tự" })
    .max(50, { message: "Xác nhận mật khẩu tối đa 50 ký tự" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Mật khẩu xác nhận không khớp",
  path: ["confirmPassword"],
})

export default function RegisterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form Data:", values)
  }

  return (
    <div className="max-w-md mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Đăng nhập</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Nhập email..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mật khẩu</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Nhập mật khẩu..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">Đăng nhập</Button>
        </form>
      </Form>
    </div>
  )
}
