import { defineCollection, z } from 'astro:content';

const launchSchema = z.object({
  team: z.string(),
  drivers: z.array(z.string()),
  date: z.string(),
  location: z.string(),
  sourceLink: z.string(),
  eventLink: z.string(),
  primaryColor: z.string()
});

const launchDatesCollection = defineCollection({ 
	type: "data",
	schema: z.array(launchSchema),
 });

export const collections = {
  'launchDates': launchDatesCollection,
};