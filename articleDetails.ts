
export interface IArticleDetails{
    title: string, 
    date: Date, 
    mdxFileName: string, 
    peekContent: string
}

export const articleDetails: IArticleDetails[] = [
    {
        title: "Why Blog?", 
        date: new Date(" 13 07 2023"),
        mdxFileName: "0_why_blog",
        peekContent: "test content"
    },
    {
        title: "A CS Graduates first Development: Marco Polo", 
        date: new Date(" 13 07 2023"),
        mdxFileName: "1_first_dev",
        peekContent: "test content"
    },
    {
        title: "A CS Graduates second Development: ZA Route", 
        date: new Date(" 13 07 2023"),
        mdxFileName: "2_second_dev",
        peekContent: "test content"
    },
    {
        title: "Purposefully Uncomfortable: Electronics - Building a water tank refill system", 
        date: new Date(" 13 07 2023"),
        mdxFileName: "3_pu_1_electronics_wtp",
        peekContent: "test content"
    },
    {
        title: "Purposefully Uncomfortable: Using Deno and Fresh JS", 
        date: new Date(" 13 07 2023"),
        mdxFileName: "4_pu_2_deno_and_fresh",
        peekContent: "test content"
    },
    {
        title: "Purposefully Uncomfortable: Temp and Humidity Sensor using ESP 01", 
        date: new Date(" 13 07 2023"),
        mdxFileName: "5_pu_3_esp01",
        peekContent: "test content"
    },
    {
        title: "Tutorial: Real Tailwind with full intellisense support in Fresh JS", 
        date: new Date(" 13 07 2023"),
        mdxFileName: "6_tut_tailwind_fresh",
        peekContent: "test content"
    },
    {
        title: "Tutorial: MDX in Fresh (with Tailwind)", 
        date: new Date(" 13 07 2023"),
        mdxFileName: "7_tut_mdx_fresh",
        peekContent: "test content"
    },
]