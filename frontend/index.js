import { backend } from 'declarations/backend';

document.addEventListener('DOMContentLoaded', async () => {
    const itemInput = document.getElementById('itemInput');
    const addItemBtn = document.getElementById('addItemBtn');
    const shoppingList = document.getElementById('shoppingList');

    // Fetch initial list
    await fetchList();

    addItemBtn.addEventListener('click', async () => {
        const itemText = itemInput.value.trim();
        if (itemText) {
            await backend.addItem(itemText);
            itemInput.value = '';
            await fetchList();
        }
    });

    itemInput.addEventListener('keypress', async (e) => {
        if (e.key === 'Enter') {
            await addItemBtn.click();
        }
    });

    async function fetchList() {
        const items = await backend.getItems();
        shoppingList.innerHTML = '';
        items.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="${item.completed ? 'completed' : ''}">${item.text}</span>
                <button class="delete-btn" data-id="${item.id}"><i class="fas fa-trash"></i></button>
            `;
            li.addEventListener('click', async (e) => {
                if (e.target.tagName !== 'BUTTON') {
                    await backend.toggleItem(item.id);
                    await fetchList();
                }
            });
            const deleteBtn = li.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', async (e) => {
                e.stopPropagation();
                await backend.deleteItem(item.id);
                await fetchList();
            });
            shoppingList.appendChild(li);
        });
    }
});
