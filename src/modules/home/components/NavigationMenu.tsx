import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Link } from "react-router";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="text-muted-foreground line-clamp-2">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
export const NavigationMnu = () => {
  const [search, searchSetter] = useState("");
  const searchHandle = () => {
    console.log(search);
  };
  return (
    <NavigationMenu className="fixed top-0 left-0 bg-white z-50">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Movies</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-96">
              <ListItem href="/topMovies" title="Top 100 movies">
                Top 100 highest IMDB rating movies
              </ListItem>
              <ListItem href="/popularMovies" title="Most popular movies">
                Most popular 100 movies
              </ListItem>
              <ListItem href="/genres" title=" Movies by genre">
                Movies by genre
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      <InputGroup className="bg-white">
        <InputGroupInput
          placeholder="Search by title"
          onChange={(e) => {
            searchSetter(e.target.value);
          }}
        />
        <InputGroupAddon align="inline-end">
          <SearchIcon onClick={searchHandle} className="cursor-pointer" />
        </InputGroupAddon>
      </InputGroup>
    </NavigationMenu>
  );
};
