



'use client'

import { useAppDispatch } from "@/store/hooks"
import { Button } from "./ui/button"

export default function ButtonComponent() {
  const dispatch = useAppDispatch();
  return (
    <div>
      <Button onClick={}>Increment</Button>
      <Button onClick={}>Decrement</Button>
      <Button onClick={}>Reset</Button>
    </div>
  )
}
