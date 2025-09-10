function steadyGene(gene, n) {
  const maxLength = n / 4;

  const geneEntry = gene.split("").reduce(
    (acc, curr) => {
      acc[curr]++;
      return acc;
    },
    {
      C: 0,
      G: 0,
      A: 0,
      T: 0,
    }
  );

  let minlength = n;
  let left = 0;
  for (let right = 0; right < n; right++) {
    geneEntry[gene[right]]--;
    console.log(right, left, geneEntry);
    while (
      left < n &&
      ["C", "G", "T", "A"].every((gen) => geneEntry[gen] <= maxLength)
    ) {
      console.log("----", left, geneEntry);
      minlength = Math.min(minlength, right - left + 1);
      geneEntry[gene[left]]++;
      left++;
    }
  }
  return minlength;
}
