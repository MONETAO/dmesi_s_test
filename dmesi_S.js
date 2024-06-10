function adjustFontSize(element, maxChars, className) {
    if (element.textContent.length > maxChars) {
        element.classList.add(className);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.button-container button');

    // ボタンがクリックされたときの処理
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // Toggle 'selected' class
            this.classList.toggle('selected');

            // Get the image inside the button
            const img = this.querySelector('img');
            if (this.classList.contains('selected')) {
                // If button is selected, change image src to icon-white
                img.src = img.src.replace('/icon-black/', '/icon-white/');
            } else {
                // If button is deselected, change image src to icon-black
                img.src = img.src.replace('/icon-white/', '/icon-black/');
            }
        });
    });

    // URLからクエリパラメータを取得
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const selectedIds = urlParams.get('selectedIds');

    // selectedIdsがnullでない場合にのみ結果を表示
    if (selectedIds) {
        const selectedButtons = selectedIds.split(',');
        displayResults(selectedButtons);
    } else {
        // selectedIdsがnullの場合はデフォルトの画像を表示
        displayDefaultImage();
    }

    // 名前の長さに応じてフォントサイズを調整
    document.querySelectorAll('.p_name').forEach(nameElement => {
        adjustFontSize(nameElement, 20, 'small-font'); // 22文字以上ならフォントサイズを小さく
    });
});

// 選択されたフードを表示する関数
function displayResults(selectedIds) {
    // 結果表示用のコンテナを取得
    const resultContainer = document.getElementById('resultContainer');

    // 選択されたフードのIDに一致するフードを抽出
    const selectedTypes = selectedIds;

    function isSelectedFood(food) {
        return food.type.some(type => selectedTypes.includes(type));
    }

    const result = foods.filter(food => isSelectedFood(food));

    // 結果を表示
    resultContainer.innerHTML = '';

    // 選択されたフードが見つからない場合はデフォルトの画像を表示
    if (result.length === 0) {
        displayDefaultImage();
    } else {
        // 選択されたフードを表示
        result.forEach(food => {
            const foodItem = document.createElement('div');
            foodItem.classList.add('food-item');
            foodItem.innerHTML = `
            <div class="food_box" data-restaurant-id="${food.restaurantId}">
                <img src="${food.image}" alt="${food.name}">
                <div class="name_div">
                    <p class="p_name">${food.name}</p>
                </div>
                <div class="price_div">
                    <p class="p_price">${food.price}円</p>
                </div>
            </div>
            `;
            resultContainer.appendChild(foodItem);

            // フード名の長さに応じてフォントサイズを調整
            const nameElement = foodItem.querySelector('.p_name');
            adjustFontSize(nameElement, 22, 'small-font');
        });

        // クリックイベントを設定
        document.querySelectorAll('.food_box').forEach(item => {
            item.addEventListener('click', function () {
                const restaurantId = this.getAttribute('data-restaurant-id');
                const restaurant = restaurants.find(r => r.restaurantId === restaurantId);
                if (restaurant) {
                    showPopup(restaurant);
                }
            });
        });
    }
}

// デフォルトの画像を表示する関数
function displayDefaultImage() {
    const resultContainer = document.getElementById('resultContainer');
    const defaultImage = document.createElement('img');
    defaultImage.src = "image/NoResult.jpeg";
    defaultImage.alt = "No Result";
    resultContainer.appendChild(defaultImage);
}

function redirectToResultPage() {
    const selectedButtons = document.querySelectorAll('.button-container button.selected');
    const selectedIds = Array.from(selectedButtons).map(button => button.id);
    const queryString = encodeURIComponent(selectedIds.join(','));
    window.location.href = `dmesi_S_food_result.html?selectedIds=${queryString}`;
}

function goBack() {
    window.location.href = 'dmesi_S_food_icon.html';
}

function showPopup(restaurant) {
    document.getElementById('restaurantImage').src = `image/DSR/${restaurant.restaurantImage}.jpg`;
    document.getElementById('restaurantName').textContent = restaurant.restaurantName;

    const iconsContainer = document.getElementById('icons');
    iconsContainer.innerHTML = '';
    restaurant.icons.forEach(icon => {
        const img = document.createElement('img');
        img.src = `image/icon/icon-black/${icon}.png`;
        iconsContainer.appendChild(img);
    });

    document.getElementById('hours').textContent = restaurant.hours;
    document.getElementById('locationImage').src = `image/DSR_location/${restaurant.locationImage}.jpg`;

    const foodItemsContainer = document.getElementById('foodItems');
    foodItemsContainer.innerHTML = '';
    foods.filter(food => food.restaurantId === restaurant.restaurantId).forEach(food => {
        const img = document.createElement('img');
        img.src = food.image;
        img.alt = food.name;
        foodItemsContainer.appendChild(img);
    });

    document.getElementById('popup').classList.remove('hidden');
}

function closePopup() {
    document.getElementById('popup').classList.add('hidden');
}