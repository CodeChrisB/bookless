//@BaseCode
using System;

namespace CommonBase.Attributes
{
	[AttributeUsage(AttributeTargets.Property)]
    public partial class ContractPropertyInfoAttribute : Attribute
    {
        private bool notMapped = false;
        public bool NotMapped
        {
            get => notMapped && HasImplementation == false;
            set => notMapped = value;
        }
        public bool HasImplementation { get; init; } = false;
        public bool IsAutoProperty { get; init; } = true;

        public int Order { get; set; } = 10_000;
        public string ColumnName { get; set; }
        public string NavigationName { get; set; }

        public bool Required { get; set; } = false;
        public bool HasIndex { get; set; } = false;
        public bool IsUnique { get; set; } = false;

        public bool IsFixedLength { get; set; } = false;
        public int MinLength { get; set; } = -1;
        public int MaxLength { get; set; } = -1;
        public string RegularExpression { get; set; }
        public ContentType ContentType { get; set; } = ContentType.Undefined;

        public bool HasUniqueIndexWithName { get; set; } = false;
        public string IndexName { get; set; } = string.Empty;
        public int IndexColumnOrder { get; set; }

        public string DefaultValue { get; set; }
        public string DefaultValueSql { get; set; }
        public string Description { get; set; }
    }
}
