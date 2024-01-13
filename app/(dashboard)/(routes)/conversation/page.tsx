import Heading from '@/components/heading'
import { MessageCircle } from 'lucide-react'
import React from 'react'

const Conversation = () => {
  return (
    <div>
        <Heading
        title="Conversation"
        description="Our most advanced conversation model."
        icon={MessageCircle}
        iconColor="text-yellow-700"
        bgColor="bg-purple-500"
        />
    </div>
  )
}

export default Conversation