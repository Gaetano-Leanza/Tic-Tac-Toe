  let fields = [null, null, null, null, null, null, null, null, null];
      let currentPlayer = 'X';

      function render() {
        const container = document.getElementById('Content');
        let html = '<table>';

        for (let row = 0; row < 3; row++) {
          html += '<tr>';
          for (let col = 0; col < 3; col++) {
            const index = row * 3 + col;
            const value = fields[index] ? fields[index] : '';
            html += `<td onclick="handleClick(${index})">${value}</td>`;
          }
          html += '</tr>';
        }

        html += '</table>';
        container.innerHTML = html;
      }

      function handleClick(index) {
        if (!fields[index]) {
          fields[index] = currentPlayer;
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
          render();
        }
      }

      render();