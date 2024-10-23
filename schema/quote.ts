import { z } from 'zod'

export const formSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    projectType: z.enum(['ecommerce', 'blog', 'crm', 'webapp', 'portfolio', 'game2d', 'game3d', 'graphicdesign', 'custom']),
    budget: z.number().min(1000, 'Budget should be at least $1000').max(50000, 'Budget should be less than $50000'),
    timeline: z.number().min(1, 'Timeline should be at least 1 week').max(52, 'Timeline should be less than or equal to 52 weeks'),
    features: z.union([
        // Case for predefined features (e.g., ecommerce, blog, etc.)
        z.record(z.boolean()).refine(
            (features) => Object.values(features).some(value => value === true),
            { message: 'At least one feature must be selected' }
        ),
        // Case for custom project description
        z.string().min(1, 'Custom project description is required')
    ]),
    customDescription: z.string().optional(),
})
