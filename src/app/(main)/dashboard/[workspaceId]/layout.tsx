import React from 'react'

interface LayoutProps {
    children: React.ReactNode;
    params: any;
}

const Layout: React.FC<LayoutProps> = ({children, params}) => {
  return (
    <div className='flex over-hidden h-screen'>
        {children}
    </div>
  )
}

export default Layout;