```function calculaNota(ex, p1, p2) {
  let nota1 = ex * 1;
  let nota2 = p1 * 2;
  let nota3 = p2 * 3;
  let mediaPonderada = (nota1 + nota2 + nota3) / 6;
  if (mediaPonderada >= 9) {
    return 'A';
  } else if (mediaPonderada < 9 && mediaPonderada >= 7.5) {
    return 'B';
  } else if (mediaPonderada < 7.5 && mediaPonderada >= 6) {
    return 'C';
  } else {
    return 'D';
  }
}
```

