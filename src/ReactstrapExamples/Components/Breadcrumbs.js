import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap'

const Breadcrumbs = () => {
    return (
        <div>
            <Breadcrumb className='bg-light p-1'>
                <BreadcrumbItem href="#">Home</BreadcrumbItem>
                <BreadcrumbItem href="#">Library</BreadcrumbItem>
                <BreadcrumbItem active>Data</BreadcrumbItem>
            </Breadcrumb>
        </div>
    )
}

export default Breadcrumbs
