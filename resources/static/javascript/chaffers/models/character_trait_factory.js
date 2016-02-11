(function() {
    angular.module('chaffers').factory('CharacterTrait', [
        'BaseModel',
        'extend',
        'relationManager',
        'TextBlock',
        'AttributeModifier',
        'AbilityModifier',
        characterTraitFactory
    ]);

    function characterTraitFactory(
        BaseModel,
        extend,
        relationManager,
        TextBlock,
        AttributeModifier,
        AbilityModifier
    ) {

        /**
         * Class to contain Character Trait data and functionality
         * @constructor
         */
        function CharacterTrait() {

            this.displayName = undefined;
            this.description = undefined;
            this.attributeModifiers = undefined;
            this.abilityModifiers = undefined;

            BaseModel.apply(this, arguments);
        }

        // Inherit from the Base Model since this is a backend model
        extend(CharacterTrait, BaseModel);

        // Attach relations
        relationManager.registerHasOneRelation(CharacterTrait, 'description', TextBlock);
        relationManager.registerHasManyRelation(CharacterTrait, 'attributeModifiers', AttributeModifier);
        relationManager.registerHasManyRelation(CharacterTrait, 'abilityModifiers', AbilityModifier);

        // Instance Functions
        CharacterTrait.prototype.getDisplayName = getDisplayName;
        CharacterTrait.prototype.getDescription = getDescription;
        CharacterTrait.prototype.getAbilityModifiers = getAbilityModifiers;
        CharacterTrait.prototype.getAttributeModifiers = getAttributeModifiers;

        return CharacterTrait;

        // STOP! Nothing but functions past this point please :)

        /**
         * Returns the display name for the character trait
         */
        function getDisplayName() {
            return this.displayName;
        }

        /**
         * Returns the description for the character trait
         * @returns {*}
         */
        function getDescription() {

            // If the description is not an instance of text block return nothing
            if (typeof this.description === 'undefined') {
                return '';
            }

            return this.description.getText();
        }

        /**
         * Returns the ability modifiers for the character trait
         */
        function getAbilityModifiers() {
            return this.abilityModifiers;
        }

        /**
         * Returns the attribute modifiers for the character trait
         */
        function getAttributeModifiers() {
            return this.attributeModifiers;
        }

    }

})();