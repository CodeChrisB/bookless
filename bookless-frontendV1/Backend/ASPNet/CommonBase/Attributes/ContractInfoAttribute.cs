//@BaseCode
using System;

namespace CommonBase.Attributes
{
	[AttributeUsage(AttributeTargets.Interface)]
    public partial class ContractInfoAttribute : Attribute
    {
        public ContextType ContextType { get; set; } = ContextType.Table;
        public string SchemaName { get; set; }
        public string ContextName { get; set; }
        public string KeyName { get; set; }
        public string Description { get; set; }
    }
}
