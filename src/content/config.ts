// 1. Importa las utilidades de `astro:content`
import { defineCollection, z } from 'astro:content';
// 2. Define tu colección(es)
const techCollection = defineCollection({
    type: 'content', // v2.5.0 y posteriores
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        image: z.string().optional(),
        tags: z.array(z.string()),
    }),
});// 3. Exporta un único objeto `collections` para registrar tu(s) colección(es)
//    Esta clave debe coincidir con el nombre de tu directorio de colección en "src/content"
export const collections = {
    'tech': techCollection,
};