/*
    Copyright (c) 2020, salesforce.com, inc.
    All rights reserved.
    SPDX-License-Identifier: BSD-3-Clause
    For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
*/
/**
 * A basket service to add to basket, load basket and blast off events
 */
import gql from 'graphql-tag';

const getBasketAttributes = `basketId
            customerId
            getBasketMessage
            totalProductsQuantity
            shipmentId
            shipmentTotal
            selectedShippingMethodId
            products {
                productId
                itemId
                quantity
                productName
                price
                imageURL
            itemTotalAfterDiscount
            itemTotalNonAdjusted
            variationAttributes {
                id
                name
                selectedValue {
                    name
                    orderable
                    value
                }
            }
            prices {
                list
                sale
            }
            productPromotions {
                calloutMsg
                promotionalPrice
                promotionId
            }
        }
            orderTotal
            orderLevelPriceAdjustment {
                itemText
                price
        }
            shippingTotal
            shippingTotalTax
            taxation
            taxTotal
            shippingMethods {
                defaultShippingMethodId
                applicableShippingMethods {
                    id
                    name
                    description
                    price
                    c_estimatedArrivalTime
                    c_storePickupEnabled
                }
}`;

export const GET_BASKET = gql`
query {
    getBasket {
        ${getBasketAttributes}
    }
}`;

export const ADD_TO_BASKET = gql`
    mutation addProductToBasket($productId: String!, $quantity: Int!) {
        addProductToBasket(productId: $productId, quantity: $quantity) {
            basketId
            customerId
            addProductMessage
            getBasketMessage
            totalProductsQuantity
            products {
                productId
                itemId
                quantity
                productName
                price
            }
        }
    }
`;

export const UPDATE_BASKET = gql`
    mutation updateShippingMethod(
        $basketId: String!
        $shipmentId: String!
        $shippingMethodId: String!
    ) {
        updateShippingMethod(
            basketId: $basketId
            shipmentId: $shipmentId
            shippingMethodId: $shippingMethodId
        ) {
            ${getBasketAttributes}
        }
    }
`;

export const REMOVE_ITEM_FROM_BASKET = gql`
    mutation removeItemFromBasket($itemId: String!) {
        removeItemFromBasket(itemId: $itemId) {
            ${getBasketAttributes}
        }
    }
`;
