"use client"
import { navigationLinks } from "@/data/navigation-links"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navigation = () => {
  const pathname = usePathname()

  return (
    <nav>
      <ul>
        {navigationLinks.map((el) => (
          <li key={el.path}>
            <Link
              className={`link${pathname === el.path ? "-active" : ""}`}
              href={el.path}
            >
              {el.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
