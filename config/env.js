/*
 * Environment variables
 */

if (process.env.NODE_ENV === 'production') {
  console.log('Set environment variables in external server.')
} else {
  process.env.PORT = 3000
}
