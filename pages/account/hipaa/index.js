import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/common/nav';
const HipaaComponent = dynamic(
  () => import('@/components/account/hipaa'),
  { ssr: false },
);

export default function Login() {
  return <>
    <Navbar/>
    <HipaaComponent/>
  </>
}
