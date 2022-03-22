using Blockchain.Algorithms;
using System;
using System.Collections.Generic;
using System.Linq;
using Blockchain.Exceptions;
using BlockchainData;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Runtime.Serialization.Json;
using System.IO;
using System.Text;

namespace Blockchain
{
    /// <summary>
    /// Цепочка блоков.
    /// </summary>
    public class Chain
    {
        /// <summary>
        /// Алгоритм хеширования.
        /// </summary>
        private IAlgorithm _algorithm = AlgorithmHelper.GetDefaultAlgorithm();

        /// <summary>
        /// Провайдер данных.
        /// </summary>
        private IDataProvider _dataProvider = DataProviderHelper.GetDefaultDataProvider();

        /// <summary>
        /// Список, содержащий в себе все блоки.
        /// </summary>
        private List<Block> _blockChain = new List<Block>();
