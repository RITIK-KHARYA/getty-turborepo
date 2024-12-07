import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
 

interface BreadlinkProps { 
    link1: string
    link2: string
    link3: string
    classname?: string
}
 

export default function Breadcrumbdemo({ link1, link2, link3,classname }: BreadlinkProps) {
    return (
        <Breadcrumb className={classname}>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href={link1}>Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink href={link2}>Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>

    );
}

