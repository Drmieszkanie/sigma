// Funkcja do tworzenia nowych przeciwników
function spawnEnemy() {
    const randomX = Math.floor(Math.random() * mapWidth);  // Losowa pozycja X
    const randomY = Math.floor(Math.random() * mapHeight); // Losowa pozycja Y
  
    // Upewniamy się, że nowy przeciwnik nie pojawi się w miejscu ściany
    if (worldMap[randomY][randomX] !== 1) {
      enemies.push({
        x: randomX + 0.5,  // Dodajemy .5, aby przeciwnik pojawił się na środku komórki
        y: randomY + 0.5,
        health: 100,
        color: 'red',  // Można to zmienić na inne kolory
        speed: 0.03
      });
    } else {
      // Jeśli losowy punkt jest w ścianie, próbujemy ponownie
      spawnEnemy();
    }
  }
  
  // Funkcja inicjalizująca spawn przeciwników co 20 sekund
  function startEnemySpawner() {
    setInterval(spawnEnemy, 20000);  // Dodaje przeciwnika co 20 sekund (20000ms)
  }
  
  // Wywołanie funkcji uruchamiającej spawner przeciwników
  startEnemySpawner();
  