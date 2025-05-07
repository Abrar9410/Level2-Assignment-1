function formatString(input: string, toUpper?: boolean): string {
   if (toUpper === true || undefined) {
        return input.toUpperCase();
   }
   return input.toLowerCase(); 
}